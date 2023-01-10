var app = angular.module("service", [])

app.filter("myfilter", function ()
{
    return function (c)
    {
        var i, a , txt = "";
        for (i = 0; i < c.length; i++)
        {
            a = c[i];
            if (i % 2 == 0) {
            a = a.toLowerCase();
            }
            txt += a;
        }
        return txt;
    }
})

app.controller("serviceCtrl", function ($scope)
{
    $scope.customers = [
        {cid:1, name:'Arun', vtype:'2-Wheeler', brand:'Royal Enfield', model:'Classic 650', stype:'General Service', sprice:1000},
        {cid:2, name:'Mirudhulaa', vtype:'2-Wheeler', brand:'TVS', model:'Scooty Zest', stype:'General Service', sprice:550},
        {cid:3, name:'Sneha', vtype:'4-Wheeler', brand:'Audi', model:'A8', stype:'Oil Leak', sprice:5000},
        {cid:4, name:'Dharma', vtype:'4-Wheeler', brand:'Mercedes', model:'Benz', stype:'Engine Repair', sprice:10000},
        {cid:5, name:'Muktha', vtype:'2-Wheeler', brand:'Piaggio', model:'Vespa', stype:'Self Not Works', sprice:870},
        {cid:6, name:'Vikram', vtype:'4-Wheeler', brand:'Mahindra', model:'Thar', stype:'General Service', sprice:3000}
    ];

    $scope.orderByMe = function(c) {
        $scope.myOrderBy = c
    }
    $scope.rowlimit = 6;
})