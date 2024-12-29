// data.js

const games = [
    { team1: { name: "Wolfsburg", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" }, team2: { name: "Stuttgart", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Qc_eb6-lZEDR8ojQmZxFhQ_64x64.png" }, score: "1 - 0" },
    { team1: { name: "Wolfsburg", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" }, team2: { name: "Bayer Leverkusen", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/0zIcXiwD_JGY482DFC28Lw_64x64.png" }, score: "2 - 1" },
    { team1: { name: "Wolfsburg", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" }, team2: { name: "Frankfurt", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/VOizBJPDHnvnSaU3XPVGAw_64x64.png" }, score: "6 - 2" },
    { team1: { name: "Wolfsburg", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" }, team2: { name: "Holstein Kiel", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/9NJC7z1ReBNUIdqTTywvCw_64x64.png" }, score: "2 - 2" },
    { team1: { name: "Wolfsburg", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" }, team2: { name: "Bayer München", logo: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_64x64.png" }, score: "1 - 2" }
];

const bundesligaTableData = [
    { position: 1, team: "RB Leipzig", games: 5, points: 15, wins: 5, draws: 0, losses: 0, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/R7-Lqc_SDxd97uWgoeUQ-g_64x64.png" },
    { position: 2, team: "Borussia Dortmund", games: 5, points: 13, wins: 4, draws: 1, losses: 0, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_64x64.png" },
    { position: 3, team: "Vfl Wolfsburg", games: 5, points: 10, wins: 3, draws: 1, losses: 1, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/nCdwmPlnAA041M4HDMzmkg_64x64.png" },
    { position: 4, team: "Stuttgart", games: 5, points: 10, wins: 3, draws: 1, losses: 1, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Qc_eb6-lZEDR8ojQmZxFhQ_64x64.png" },
    { position: 5, team: "Bayer München", games: 5, points: 10, wins: 3, draws: 1, losses: 1, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_64x64.png" },
      { position: 6, team: "Pauli", games: 5, points: 8, wins: 2, draws: 2, losses: 1, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/tMFLGl5GGkQXMihhpJVXuw_64x64.png" },
    { position: 7, team: "Mainz 05", games: 5, points: 8, wins: 2, draws: 2, losses: 1, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/-_DNuqGrrFQ5FUvKjb7zAw_64x64.png" },
    { position: 8, team: "Leverkusen", games: 5, points: 6, wins: 2, draws: 0, losses: 3, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/0zIcXiwD_JGY482DFC28Lw_64x64.png" },
    { position: 9, team: "Frankfurt", games: 5, points: 6, wins: 2, draws: 0, losses: 3, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/VOizBJPDHnvnSaU3XPVGAw_64x64.png" },
    { position: 10, team: "Hoffenheim", games: 5, points: 5, wins: 1, draws: 2, losses: 2, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/zlO6wgTW2QB30eOypHGxDg_64x64.png" },
    { position: 11, team: "Augsburg", games: 5, points: 5, wins: 1, draws: 2, losses: 2, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/gjz1Ml0qpVQuY3leN4z8mQ_64x64.png" },
    { position: 12, team: "Freiburg", games: 5, points: 5, wins: 1, draws: 2, losses: 2, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/s0YO0sK9qrioMnzJuFGKuw_64x64.png" },
    { position: 13, team: "Union Berlin", games: 5, points: 5, wins: 1, draws: 2, losses: 2, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/zsPvbWQ2kNoiZX3sZXq-Yg_64x64.png" },
    { position: 14, team: "Holstein Kiel", games: 5, points: 5, wins: 1, draws: 2, losses: 2, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/9NJC7z1ReBNUIdqTTywvCw_64x64.png" },
    { position: 15, team: "M'gladbach", games: 5, points: 4, wins: 1, draws: 1, losses: 3, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/HFg_gp-vbuL7z1Othoa0ZA_64x64.png" },
    { position: 16, team: "Bochum", games: 5, points: 4, wins: 1, draws: 1, losses: 3, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/BY9Ihv1GcvZnxQWkPtEBug_64x64.png" },
    { position: 17, team: "Heidenheim", games: 5, points: 1, wins: 0, draws: 1, losses: 4, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Nqpb8Rl6ShUtB0ClAKRw-g_64x64.png" },
    { position: 18, team: "Werder Bremen", games: 5, points: 1, wins: 0, draws: 1, losses: 4, logo: "https://ssl.gstatic.com/onebox/media/sports/logos/v4G9srMr-9IWDhCXiPhAIw_64x64.png" }
];

const topScorers = [
    { name: "Amoura", games: 8, goals: 11, assists: 0, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiuUwGuoaQbmw_nAEAQ_XSF9enfbmtHEhEA&s2" },
    { name: "Arnold", games: 8, goals: 3, assists: 0, photo: "https://assets.bundesliga.com/player/dfl-obj-0000y4-dfl-clu-000003-dfl-sea-0001k8.png?fit=320,320" },
    { name: "Volland", games: 7, goals: 3, assists: 1, photo: "https://assets.bundesliga.com/player/dfl-obj-00007t-dfl-clu-00000v-dfl-sea-0001k8.png?fit=320,320" },
    { name: "Wimmer", games: 8, goals: 1, assists: 5, photo: "https://assets.bundesliga.com/player/dfl-obj-j01k33-dfl-clu-000003-dfl-sea-0001k8.png?fit=320,320" },
    { name: "Reese", games: 8, goals: 1, assists: 5, photo: "https://assets.bundesliga.com/player/dfl-obj-0026sk-dfl-clu-00000z-dfl-sea-0001k8.png?fit=320,320" }
];

const titles = [
    { competition: "Bundesliga", total: 1, year: "2008/2009" },
    { competition: "Pokal", total: 1, year: "2014/2015" },
    { competition: "Champions League", total: 0, year: "-" },
    { competition: "Europa League", total: 0, year: "-" },
    { competition: "Super Cup", total: 1, year: "2015" }
];

const transferHistory = [
    { playerName: "Vnagnoman", fromClub: "Stuttgart", toClub: "Wolfsburg", value: "€8M", position: "LD" },
    { playerName: "Kevin P.", fromClub: "Wolfsburg", toClub: "Fiorentina", value: "€10.7M", position: "ME" },
    { playerName: "Volland", fromClub: "Union Berlin", toClub: "Wolfsburg", value: "€6.6M", position: "ATA" },
    { playerName: "Fabian", fromClub: "Herta", toClub: "Wolfsburg", value: "€2M", position: "MC" }
];
