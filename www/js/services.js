angular.module('orgaTareas.services', [])

.factory('SPService',function($http) {
  // Might use a resource here that returns a JSON array
  var base_url = "http://sgd.ryq.cl/_vti_bin/Authentication.asmx";

   return {
      Login: function()
      {
        $http({
          url:base_url,
          method:"POST",
          headers:{'Content-Type': 'application/xml'},
          config: { uuid: 'my actual uuid', options: 'attributeNo=1', querystring: 'condition=2'}
        }).success(function(data, status, headers, config)
            {
              return data;
            }).error(function(data, status, headers, config) {
              return data;
  });
      }
   }
});
