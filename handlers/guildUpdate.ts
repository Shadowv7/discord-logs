import { Client, Guild} from 'discord.js';

export async function handleGuildMemberUpdateEvent(client: Client, guild: Guild) {
    // If the guild increased in boost level
    if (!guild.premiumTier && guild.premiumTier) {
        client.emit('guildBoostLevelUp', guild);
    }
 }
