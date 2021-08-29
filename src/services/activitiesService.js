export async function getActivitiesAsync(token, t1, t2) {
    return await fetch(`https://www.strava.com/api/v3/athlete/activities?before=${t2}&after=${t1}&page=1&per_page=100`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json());

}
