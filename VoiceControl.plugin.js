/**
 * @name VoiceControlPlusPlus FIXED
 * @version 1.2.0
 */

module.exports = class VoiceControlPlusPlus {
    start() {
        this.addUI();
        this.addHotkeys();
        console.log("VoiceControl++ FIXED Loaded 🔥");
    }

    stop() {
        document.removeEventListener("keydown", this.keyHandler);
        const panel = document.getElementById("vc-control-panel");
        if (panel) panel.remove();
    }

    getVoiceChannel() {
        const VoiceStateStore = BdApi.Webpack.getStore("VoiceStateStore");
        const ChannelStore = BdApi.Webpack.getStore("ChannelStore");
        const UserStore = BdApi.Webpack.getStore("UserStore");

        const userId = UserStore.getCurrentUser().id;
        const voiceState = VoiceStateStore.getVoiceStateForUser(userId);

        if (!voiceState || !voiceState.channelId) return null;

        return ChannelStore.getChannel(voiceState.channelId);
    }

    getMembers(channel) {
        const VoiceStateStore = BdApi.Webpack.getStore("VoiceStateStore");
        return Object.values(
            VoiceStateStore.getVoiceStatesForChannel(channel.id) || {}
        );
    }

    getGuildActions() {
        return BdApi.Webpack.getModule(
            m => m?.setServerMute && m?.setServerDeaf
        );
    }

    getChannelActions() {
        return BdApi.Webpack.getModule(
            m => m?.setChannel
        );
    }

    async muteAll() {
        const channel = this.getVoiceChannel();
        if (!channel) return console.warn("No voice channel");

        const actions = this.getGuildActions();
        const members = this.getMembers(channel);

        if (!actions) return console.error("Guild actions not found");

        members.forEach(m => {
            actions.setServerMute(channel.guild_id, m.userId, true);
        });
    }

    async unmuteAll() {
        const channel = this.getVoiceChannel();
        if (!channel) return;

        const actions = this.getGuildActions();
        const members = this.getMembers(channel);

        if (!actions) return;

        members.forEach(m => {
            actions.setServerMute(channel.guild_id, m.userId, false);
        });
    }

    async deafenAll() {
        const channel = this.getVoiceChannel();
        if (!channel) return;

        const actions = this.getGuildActions();
        const members = this.getMembers(channel);

        if (!actions) return;

        members.forEach(m => {
            actions.setServerDeaf(channel.guild_id, m.userId, true);
        });
    }

    async disconnectAll() {
        const channel = this.getVoiceChannel();
        if (!channel) return;

        const actions = this.getChannelActions();
        const members = this.getMembers(channel);

        if (!actions) return console.error("Channel actions not found");

        members.forEach(m => {
            actions.setChannel(channel.guild_id, m.userId, null);
        });
    }

    addHotkeys() {
        this.keyHandler = (e) => {
            if (!e.altKey) return;

            switch (e.key.toLowerCase()) {
                case "m":
                    this.muteAll();
                    break;
                case "u":
                    this.unmuteAll();
                    break;
                case "d":
                    this.deafenAll();
                    break;
                case "x":
                    this.disconnectAll();
                    break;
            }
        };

        document.addEventListener("keydown", this.keyHandler);
    }

    addUI() {
        const panel = document.createElement("div");
        panel.id = "vc-control-panel";

        panel.style.position = "fixed";
        panel.style.bottom = "20px";
        panel.style.right = "20px";
        panel.style.background = "#1e1f22";
        panel.style.padding = "10px";
        panel.style.borderRadius = "10px";
        panel.style.zIndex = 9999;

        const buttons = [
            { text: "Mute All", action: () => this.muteAll() },
            { text: "Unmute All", action: () => this.unmuteAll() },
            { text: "Deafen All", action: () => this.deafenAll() },
            { text: "Disconnect All", action: () => this.disconnectAll() }
        ];

        buttons.forEach(btn => {
            const b = document.createElement("button");
            b.innerText = btn.text;
            b.style.display = "block";
            b.style.margin = "5px";
            b.style.padding = "5px 10px";
            b.style.cursor = "pointer";
            b.onclick = btn.action;
            panel.appendChild(b);
        });

        document.body.appendChild(panel);
    }
};