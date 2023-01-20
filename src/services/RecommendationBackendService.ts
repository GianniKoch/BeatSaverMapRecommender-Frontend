import {env} from "$env/dynamic/public";

export async function getRecommendation(song_id: string, difficulty: number, characteristic: number,
                                        n_recommendations: number, n_best_tags: number) {
    const response = await fetch(`${env.PUBLIC_BACKEND_URL}/recommendation?song_id=${song_id}&difficulty=${difficulty}
&characteristic=${characteristic}&n_recommendations=${n_recommendations}&n_best_tags=${n_best_tags}`)
    return await response.json()
}

export async function getNextSection() {
    console.log("test")
    const response = await window.fetch(`${env.PUBLIC_BACKEND_API_URL}/Section`)
    console.log("test2")
    return await response.json()
}

export async function getTags() {
    const response = await window.fetch(`${env.PUBLIC_BACKEND_API_URL}/Tag`)
    return await response.json()
}

export async function setSectionTags(beatMapId: string, startTime: number, tags: []) {
    const body = {
        section: {
            beatMapId,
            startTime
        },
        tags
    }

    await window.fetch(`${env.PUBLIC_BACKEND_API_URL}/Section`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export function idToChar(id: number) {
    switch (id) {
        case 1:
            return "OneSaber"
        case 2:
            return "NoArrows"
        case 3:
            return "90Degree"
        case 4:
            return "360Degree"
        case 5:
            return "Lightshow"
        case 6:
            return "Lawless"
        default:
            return "Standard"
    }
}

export function idToDiff(id: number) {
    switch (id) {
        case 1:
            return "Normal"
        case 2:
            return "Hard"
        case 3:
            return "Expert"
        case 4:
            return "Expert+"
        default:
            return "Easy"
    }
}