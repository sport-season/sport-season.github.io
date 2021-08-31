export async function getActivitiesAsync(token, t1, t2, page = 1, limit=100) {
    return await fetch(`https://www.strava.com/api/v3/athlete/activities?before=${t2}&after=${t1}&page=${page}&per_page=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json());
}
