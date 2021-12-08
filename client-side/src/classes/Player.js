
//Player object used when fetching and processing player stats
class Player {
    constructor(id, name, photo, teamName, appearances, position, goals, assists, yellows, reds, conceded, leagueName) {

            this.id = id;
            this.name = name;
            this.photo = photo;
            this.teamName = teamName;
            this.appearances = appearances;
            this.goals = goals;
            this.assists = assists;
            this.yellows = yellows;
            this.reds = reds;
            this.conceded = conceded;
            this.position = position;
            this.totalPoints = 0;
            this.weeklyPoints = 0;
            this.leagueName = leagueName;
    }

    calcTotalPoints() {
        return 100;
    }
}

export default Player;