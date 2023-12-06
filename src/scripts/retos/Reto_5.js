function cyberReindeer(road, time) {
    const roads = [road];

    for (let i = 1; i < time; i++) {
        const isOpenBarriers = i >= 5;
        const lastRoad = roads
            .at(-1)
            .replaceAll('|', isOpenBarriers ? '*' : '|');

        const sleighIndex = lastRoad.indexOf('S');
        const nextStep = lastRoad[sleighIndex + 1];

        if (['.', '*'].includes(nextStep)) {
            const newRoadArray = lastRoad.split('');
            newRoadArray[sleighIndex] = '.';
            newRoadArray[sleighIndex + 1] = 'S';

            if (road[sleighIndex] === '|') {
                newRoadArray[sleighIndex] = '*';
            }

            roads.push(newRoadArray.join(''));
            continue;
        }

        roads.push(lastRoad);
    }

    return roads;
}

const road = 'S..|...|..';
const time = 10;
console.log(cyberReindeer(road, time));
