'use strict';

const KEY = 'fylo'

export default {

}

let DB_DESC = [
    {
        "title": "Access your files, anywhere",
        "txt": "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
        "title": "Security you can trust",
        "txt": "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
        "title": "Real-time collaboration",
        "txt": "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
        "title": "Store any type of file",
        "txt": "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
]

let fylos = []

async function query() {
    fylos = utilService.loadFromStorage(KEY);

    if (!fylos || !fylos.length) {
        fylos = DB_DESC;
        fylos.forEach(fylo => book.reviews = [])
        utilService.storeToStorage(KEY, books)

    }
    return Promise.resolve(books);

}