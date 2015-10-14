var app = angular.module('MainPage', []);

app.controller('CategoryController', function ($scope) {
    $scope.Categories = [{ Id: 1, CategoryName: 'Tshirt', Image: 'Image1', src: "../Images/shirt.jpg" },
        { Id: 3, CategoryName: 'Shirts', Image: 'Image', src: "../Images/shirt.jpg" },
        { Id: 4, CategoryName: 'Pant', Image: 'Image3', src: "../Images/shirt.jpg" },
        { Id: 5, CategoryName: 'Sleeves', Image: 'Image4', src: "../Images/shirt.jpg" }
    , { Id: 6, CategoryName: 'Hoodie', Image: 'Image5', src: "../Images/shirt.jpg" }
    , { Id: 7, CategoryName: 'track', Image: 'Image6', src: "../Images/shirt.jpg" }
    , { Id: 8, CategoryName: 'cargos', Image: 'Image7', src: "../Images/shirt.jpg" }];

    $scope.Items = [{ Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
   { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" },
    { Title: 'Title1', ImageURL: 'somthing ', src: "../Images/shirt.jpg" }];


});