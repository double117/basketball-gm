/**
 * @name views
 * @namespace Contains all the view modules.
 */
define(["ui", "lib/react", "util/bbgmView", "util/viewHelpers", "views/account", "views/accountUpdateCard", "views/changes", "views/customizePlayer", "views/dashboard", "views/deleteLeague", "views/deleteOldData", "views/draft", "views/draftScouting", "views/draftSummary", "views/editTeamInfo", "views/eventLog", "views/exportLeague", "views/exportStats", "views/fantasyDraft", "views/freeAgents", "views/gameLog", "views/godMode", "views/hallOfFame", "views/history", "views/historyAll", "jsx!views/Inbox", "views/leaders", "views/leagueDashboard", "views/leagueFinances", "views/live", "views/liveGame", "views/loginOrRegister", "views/lostPassword", "views/manual", "jsx!views/Message", "views/multiTeamMode", "views/negotiation", "views/negotiationList", "views/newLeague", "views/newTeam", "views/player", "views/playerFeats", "views/playerRatingDists", "views/playerRatings", "views/playerShotLocations", "views/playerStatDists", "views/playerStats", "views/playoffs", "views/powerRankings", "views/resetPassword", "views/roster", "views/schedule", "jsx!views/Standings", "views/teamFinances", "views/teamHistory", "views/teamShotLocations", "views/teamStatDists", "views/teamStats", "views/trade", "views/tradingBlock", "views/upcomingFreeAgents", "views/watchList"], function (ui, React, bbgmView, viewHelpers, account, accountUpdateCard, changes, customizePlayer, dashboard, deleteLeague, deleteOldData, draft, draftScouting, draftSummary, editTeamInfo, eventLog, exportLeague, exportStats, fantasyDraft, freeAgents, gameLog, godMode, hallOfFame, history, historyAll, Inbox, leaders, leagueDashboard, leagueFinances, live, liveGame, loginOrRegister, lostPassword, manual, Message, multiTeamMode, negotiation, negotiationList, newLeague, newTeam, player, playerFeats, playerRatingDists, playerRatings, playerShotLocations, playerStatDists, playerStats, playoffs, powerRankings, resetPassword, roster, schedule, Standings, teamFinances, teamHistory, teamShotLocations, teamStatDists, teamStats, trade, tradingBlock, upcomingFreeAgents, watchList) {
    "use strict";

    function staticPage(name, title) {
        return bbgmView.init({
            id: name,
            beforeReq: viewHelpers.beforeNonLeague,
            runBefore: [function () {}],
            uiFirst: function () {
                ui.title(title);
            }
        });
    }

    function leagueReact(Child) {
        return {
            get: function (req) {
                viewHelpers.beforeLeague(req).spread(function (updateEvents, cb) {
                    React.render(
                        <Child params={req.params} />,
                        document.getElementById('league_content')
                    );

                    // Scroll to top
                    if (updateEvents.length === 0) {
                        window.scrollTo(window.pageXOffset, 0);
                    }

                    cb();
                });
            }
        };
    }

    return {
        staticPage: staticPage,

        dashboard: dashboard,
        newLeague: newLeague,
        deleteLeague: deleteLeague,
        manual: manual,
        changes: changes,
        account: account,
        loginOrRegister: loginOrRegister,
        lostPassword: lostPassword,
        resetPassword: resetPassword,

        inbox: leagueReact(Inbox),
        message: leagueReact(Message),
        standings: leagueReact(Standings),
        leagueDashboard: leagueDashboard,
        playoffs: playoffs,
        leagueFinances: leagueFinances,
        history: history,
        hallOfFame: hallOfFame,
        editTeamInfo: editTeamInfo,
        roster: roster,
        schedule: schedule,
        teamFinances: teamFinances,
        teamHistory: teamHistory,
        freeAgents: freeAgents,
        trade: trade,
        draft: draft,
        draftSummary: draftSummary,
        gameLog: gameLog,
        leaders: leaders,
        playerRatings: playerRatings,
        playerStats: playerStats,
        teamStats: teamStats,
        newTeam: newTeam,
        player: player,
        negotiationList: negotiationList,
        negotiation: negotiation,
        playerRatingDists: playerRatingDists,
        playerStatDists: playerStatDists,
        teamStatDists: teamStatDists,
        playerShotLocations: playerShotLocations,
        teamShotLocations: teamShotLocations,
        exportLeague: exportLeague,
        tradingBlock: tradingBlock,
        fantasyDraft: fantasyDraft,
        live: live,
        liveGame: liveGame,
        eventLog: eventLog,
        deleteOldData: deleteOldData,
        draftScouting: draftScouting,
        watchList: watchList,
        customizePlayer: customizePlayer,
        historyAll: historyAll,
        upcomingFreeAgents: upcomingFreeAgents,
        godMode: godMode,
        powerRankings: powerRankings,
        exportStats: exportStats,
        playerFeats: playerFeats,
        accountUpdateCard: accountUpdateCard,
        multiTeamMode: multiTeamMode
    };
});