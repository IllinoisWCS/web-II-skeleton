angular.module('jeopardyApp', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
    /**
     * Routes provide a way for us to navigate from one web view to
     * another. Each view has a different controller. Think of the
     * view as what you see on the web page and the controller controls
     * how that view got generated / how it changes as users interact
     * with the view.
     *
     * Write 2 routes, one /random and another /question/:id - each has its
     * own templateUrl (look in partials for that file) and controller (see below for the names)
     */
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'MainController'
        })
}])

/**
 * A service serves as the main hub for all data requests (aka, the model).
 * We want to have a centralized place where we can get the question data
 * and this service might expand if we decide to do different types of data
 * requests in the future. But for now, this is the one-stop-shop to getting
 * the question data.
 *
 * Write a QuestionService service here. All it does is fetch the data from the jeopardy.json file * and return it as a Promise.
 */


/**
 * Each controller has a $scope object. This syntax always injects
 * this $scope object into each controller. How $scope works can get
 * quite complicated as more complexity is added to an Angular app,
 * but for our purposes, each controller has its own $scope. Which means,
 * any kind of variable state or changes live within this controller and no
 * where else. It is possible to share different variables amongst different
 * controllers, but we will discuss that later.
 *
 * Write a MainController controller here.
 */


/**
 * A controller can have variables as well as functions attached to its $scope.
 * These can control how the view is laid out and what changes happen.
 * We can also inject services into a controller so that the controller can have
 * access and use them. In our case, we would like to get the question data, so
 * our controller has access to the QuestionService, which provides one method
 * to access the data.
 *
 * Write a RandomController controller here that also injects QuestionService
 */


/**
 * $routeParams is a service that stores the parameter that we pass in through the url. In this
 * case, we have a parameter called id. So $routeParams has a id attribute. And we can access
 * that and determine what question to return back.
 *
 * Write a DetailController controller here that also injects $routeParams and QuestionService
 */
