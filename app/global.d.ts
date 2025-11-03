// global.d.ts
export {}; // ensure this file is a module

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Allow <elevenlabs-convai agent-id="..."></elevenlabs-convai>
      "elevenlabs-convai": {
        "agent-id"?: string;
        // accept any other attributes to be flexible
        [key: string]: any;
      };
    }
  }
}
