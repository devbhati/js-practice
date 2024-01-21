
//9. Course Schedule - I
// https://leetcode.com/problems/course-schedule/description/

function canFinishArray(numCourses, prerequisites) {
    let obj = {};
    let allCourses = [];
    let dependentCourses = [];
    prerequisites.forEach(p => {
        if(obj[p[0]]) obj[p[0]].push(p[1]);
        else obj[p[0]] = [p[1]];
        allCourses.push(p[0]); allCourses.push(p[1]);
        dependentCourses.push(p[0]);
    });
    allCourses = Array.from(new Set(allCourses));
    dependentCourses = Array.from(new Set(dependentCourses));
    const availableCourses = allCourses.filter(course => !dependentCourses.includes(course));
    for(let i = 0; i < availableCourses.length; i++) {
        let av = availableCourses[i];
        Object.keys(obj).forEach(key => {
            if(obj[key].includes(av)) obj[key].splice(obj[key].indexOf(av), 1);
            if(obj[key].length === 0) {
                availableCourses.push(parseInt(key));
                delete obj[key];
            }
        })
    }
    
    return Object.keys(obj).length === 0;
};

//9. Course Schedule - II

function canFinishDFS(numCourses, prerequisites) {
    let obj = {};
    prerequisites.forEach(p => {
        if(obj[p[0]]) obj[p[0]].push(p[1]);
        else obj[p[0]] = [p[1]];
    });
    const visitSet = new Set();
    function dfs(course) {
        if(visitSet.has(course)) return false;
        if(obj[course] === [] || !obj[course]) return true;
        visitSet.add(course);
        for(let i = 0; i < obj[course].length; i++) {
            let cour = obj[course][i];
            if(!dfs(cour)) return false;
        }
        visitSet.delete(course);
        obj[course] = [];
        return true;
    };
    for(let i = 0; i < Object.keys(obj).length; i++) {
        let co = Object.keys(obj)[i];
        if(!dfs(parseInt(co))) return false;
    }
    return true;
    
};
console.log(canFinishDFS(7, [[1,4],[2,4],[3,1],[3,2],[5,6],[6,5]]));


// 10. Course Schedule - II
// https://leetcode.com/problems/course-schedule-ii/description/
function findOrder(numCourses, prerequisites) {
    let obj = {};
    prerequisites.forEach(p => {
        if(obj[p[0]]) obj[p[0]].push(p[1]);
        else obj[p[0]] = [p[1]];
    });
    const visitedSet = new Set();
    const result = new Set();
    function dfs(course) {
        if(visitedSet.has(course)) return false;
        if(obj[course] === [] || !obj[course]) {
            result.add(course);
            return true;   
        }
        visitedSet.add(course);
        for(let i = 0; i < obj[course].length; i++) {
            const cour = obj[course][i];
            if(!dfs(cour)) return false;
        }
        visitedSet.delete(course);
        result.add(course);
        obj[course] = [];
        return true;
    }

    for(let i = 0; i < Object.keys(obj).length; i++) {
        const co = parseInt(Object.keys(obj)[i]);
        if(!dfs(co)) return [];
    }
    return Array.from(result);
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));