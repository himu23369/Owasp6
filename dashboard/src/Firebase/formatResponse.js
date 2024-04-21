export function formatBloodPressure(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'systolic': information[key]['Systolic'],
            'distolic': information[key]['Diastolic'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

export function formatCalorie(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'Breakfast': information[key]['Breakfast'],
            'Lunch': information[key]['Lunch'],
            'Dinner': information[key]['Dinner'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

export function formatHeartRate(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'heart rate': information[key]['HeartRate'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

export function formatMood(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'Happy': information[key]['Happy'],
            'Energetic': information[key]['Energetic'],
            'Anxiety': information[key]['Anxiety'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

export function formatSleep(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'sleep': information[key]['sleep'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

export function formatWater(information) {
    let formatData = [];
    for (let key of Object.keys(information)) {
        let obj = {
            'date': String(key),
            'water': information[key]['water'],
        }
        formatData.push(obj);
    }
    return formatData.sort((a, b) => new Date(a.date)- new Date(b.date));
}

