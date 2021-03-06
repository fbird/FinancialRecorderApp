Ext.Loader.setPath({
	'Ext': 'sdk/src'
});

Ext.application({
    name: 'FinancialRecorderApp',
		
	requires: [
		'FinancialRecorderApp.view.ActivityView', 'FinancialRecorderApp.store.UserStore'
    ],

	models: ['RecorderModel', 'TransactionHistoryModel'],
    stores: ['UserStore', 'RecorderStore', 'TransactionHistoryStore'],
	controllers: ['MainController','ActivityController', 'AccountController'],
	views: ['LoginView','MainView','ActivityView', 'ActivityListView', 'ActivityDetailView', 'AccountView', 'AccountDetailView', 'AccountCashinView', 'TransactionHistoryView', 'MultiSelect'],

    currentUser: '',

    setCurrentUser: function(userName){
        this.currentUser = userName;
    },

    getCurrentUser: function(){
        return this.currentUser;
    },
	
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        var loginView = Ext.create('FinancialRecorderApp.view.LoginView');
        var mainView = Ext.create('FinancialRecorderApp.view.MainView');
        var activityView = Ext.create('FinancialRecorderApp.view.ActivityView');
        var activityDetailView = Ext.create('FinancialRecorderApp.view.ActivityDetailView');
        
        var accountView = Ext.create('FinancialRecorderApp.view.AccountView');
        var accountDetailView = Ext.create('FinancialRecorderApp.view.AccountDetailView');
        var accountCashinView = Ext.create('FinancialRecorderApp.view.AccountCashinView');

        var transactionHistoryView = Ext.create('FinancialRecorderApp.view.TransactionHistoryView')

        Ext.Viewport.add(loginView, mainView, activityView, activityDetailView, accountView, accountDetailView, transactionHistoryView);
    }
});