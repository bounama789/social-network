export const getUser = async (nickname: string, action: string) => {
    const response = await fetch('/api/getUser', {
        body: JSON.stringify({
            action: action,
            nickname: nickname,
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(async (res) => await res.json()).catch((err) => {
        return {
            status: 500,
            body: 'Internal server error',
        };
    })

    return response;
}

export function formatFollowersCount(count: number) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (count >= 1000) {
        return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return count.toString();
}