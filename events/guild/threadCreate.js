//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by BestGamersHK#1213 | https://discord.gg/friendsmp
 * @INFO
 * Work for Indocraft Development | https://indocraft.club
 * @INFO
 * Please mention him / Indocraft Development, when using this Code!
 * @INFO
 */
