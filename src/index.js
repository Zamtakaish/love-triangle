/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
          var count = 0;
        for(var i = 0; i < preferences.length; i++) {
            if ((preferences[preferences[i] - 1] !== (i + 1))&&(preferences[preferences[i] - 1] !== "triangle")){
                var first = i;
                var second  = preferences[first] - 1;
                var third = preferences[second] - 1;
                if ((preferences[third] - 1) === first){
                    preferences[first] = "triangle";
                    preferences[second] = "triangle";
                    preferences[third] = "triangle";
                    count++;
                }
            }
        }
    return count;
};
