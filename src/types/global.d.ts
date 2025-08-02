declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_title?: string;
        page_location?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {}; 