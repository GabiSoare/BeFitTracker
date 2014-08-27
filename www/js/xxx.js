    ymaps.geocode(query, { results: 5 }).then(function (res) {
        
        var response = [];
        if (res.geoObjects.get(0) == null) {
            
        }
        else if (res.geoObjects.get(1) == null){
            response = [
                res.geoObjects.get(0).properties.get('text')
            ];
        }
        else if (res.geoObjects.get(2) == null){
            response = [
                res.geoObjects.get(0).properties.get('text'),
                res.geoObjects.get(1).properties.get('text')
            ];
        }
        else if (res.geoObjects.get(3) == null){
            response = [
                res.geoObjects.get(0).properties.get('text'),
                res.geoObjects.get(1).properties.get('text'),
                res.geoObjects.get(2).properties.get('text')
            ];
        }
        else if (res.geoObjects.get(4) == null){
            response = [
                res.geoObjects.get(0).properties.get('text'),
                res.geoObjects.get(1).properties.get('text'),
                res.geoObjects.get(2).properties.get('text'),
                res.geoObjects.get(3).properties.get('text')
            ];
        }
        else {
            response = [
                res.geoObjects.get(0).properties.get('text'),
                res.geoObjects.get(1).properties.get('text'),
                res.geoObjects.get(2).properties.get('text'),
                res.geoObjects.get(3).properties.get('text'),
                res.geoObjects.get(4).properties.get('text')
            ];
        }
        callback(response);
    });