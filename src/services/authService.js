const client_id = 59766;
const client_secret = 'b7893c2f78225337f8ac6852e5c2fe313948c8f7';
const lsTokenKey = 'SportSeasonStravaTokenData';
const lsUserKey = 'SportSeasonStravaUserData';

export function getAuthLink() {
    const data = {
        client_id,
        redirect_uri: 'http://localhost:3000/',
        response_type: 'code',
        approval_prompt : 'auto',
        scope: 'activity:read',
        //state: ''
    };

    const searchParams = new URLSearchParams(data);

    return `https://www.strava.com/oauth/authorize?${searchParams.toString()}`;
}

export async function getAuthTokenAsync() {
    const lsTokenDataStr = localStorage.getItem(lsTokenKey);

    if (lsTokenDataStr && lsTokenDataStr.length) {
        const tData = JSON.parse(lsTokenDataStr);
        if (tData.expires_at && tData.expires_at * 1000 > Date.now()) {
            return tData.access_token;
        }

        if (tData.refresh_token) {
            try {
                const result = await fetch("https://www.strava.com/api/v3/oauth/token", {
                    body: new URLSearchParams({
                        client_id,
                        client_secret,
                        refresh_token: tData.refresh_token,
                        grant_type: 'refresh_token'
                    }).toString(),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST"
                }).then(res => res.json());
                localStorage.setItem(lsTokenKey, JSON.stringify(result));

                return result.access_token;

            } catch (error) {
                throw new Error(error);
            }
        }

        throw new Error('no token');
    } else {
        throw new Error('no stored token data');
    }
}

export async function setAuthTokenByCodeAsync(code) {
    try {
        const result = await fetch("https://www.strava.com/api/v3/oauth/token", {
            body: new URLSearchParams({
                client_id,
                client_secret,
                code,
                grant_type: 'authorization_code'
            }).toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then(res => res.json());

        console.log({result})
        const { athlete, ...tokenData } = result;

        localStorage.setItem(lsUserKey, JSON.stringify(athlete));
        localStorage.setItem(lsTokenKey, JSON.stringify(tokenData));

        return result.access_token;

    } catch (error) {
        throw new Error(error);
    }

}

export async function unAuthorizeAsync(){
    const access_token = '';
    try {
        await fetch(
            `https://www.strava.com/oauth/deauthorize?${new URLSearchParams({ access_token }).toString()}`,
            { method: "POST" }
            ).then(res => res.json());
        localStorage.removeItem(lsTokenKey);
        localStorage.removeItem(lsUserKey);

        return Promise.resolve({ success: true });
    } catch (error) {
        throw new Error(error);
    }
}

export function getUser() {
    return JSON.parse(localStorage.getItem(lsUserKey));
}
