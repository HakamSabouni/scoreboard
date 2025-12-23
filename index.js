let homeScore = 0;
        let awayScore = 0;

        function addPoints(team, points) {
            if (team === 'home') {
                homeScore += points;
                document.getElementById('home-score').textContent = homeScore;
            } else if (team === 'away') {
                awayScore += points;
                document.getElementById('away-score').textContent = awayScore;
            }
        }

        function resetGame() {
            homeScore = 0;
            awayScore = 0;
            document.getElementById('home-score').textContent = homeScore;
            document.getElementById('away-score').textContent = awayScore;
        }