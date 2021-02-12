const clipboardService = {
    async copy(text: string): Promise<void> {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
        }
    },
};

export default clipboardService;
