export function shortenTitle(title: string | null, limit: number): string {
    let shortenedTitle = '';
    const words = (title || '').split(' ');
    let i = 0;
    while (i < words.length && (shortenedTitle + ' ' + words[i] + '...').length < limit) {
        shortenedTitle += ' ' + words[i];
        i++;
    }
    if (shortenedTitle.length < (title || '').length) {
        return shortenedTitle + '...';
    }
    return shortenedTitle;
}