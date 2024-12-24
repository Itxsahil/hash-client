import CryptoJS from 'crypto-js';

function encryptNote({ key, note }: { key: string, note: string }) {
    // Encrypt the note with AES using the provided key
    const encryptedNote = CryptoJS.AES.encrypt(note, key).toString();
    return encryptedNote;
}

function decryptNoteSync({ key, note }: { key: string, note: string }): string {
    try {
        // note = note.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        const bytes = CryptoJS.AES.decrypt(note, key);
        const decryptedNote = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedNote;
    } catch (error) {
        console.error("Error decrypting note:", error);
        throw new Error("Failed to decrypt note");
    }
}

export { encryptNote, decryptNoteSync };
