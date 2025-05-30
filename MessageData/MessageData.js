export const textMessage = {
  text: 'I have received your message!! If you want to say someting to us.',
};

export const genericTemplate = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      elements: [
        {
          title: 'Welcome!',
          image_url:
            'https://minioapi.ts-dev.yavar.ai/z-agent-dev/profiles/43e4fcdb-c208-40bd-9b2e-05a6e2282a5e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20250529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250529T183439Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=228142d88cf71d4028ee1904cac95d375d5c8d697fada5f9fbd25da78f094359',
          subtitle: 'We have the right hat for everyone.',
          default_action: {
            type: 'web_url',
            url: 'https://yavar.ai',
          },
          buttons: [
            {
              type: 'web_url',
              url: 'https://yavar.ai',
              title: 'View Website',
            },
            {
              type: 'postback',
              title: 'Start Chatting',
              payload: 'DEVELOPER_DEFINED_PAYLOAD',
            },
          ],
        },
      ],
    },
  },
};

export const buttonTemplate = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'What do you want to do next?',
      buttons: [
        {
          type: 'web_url',
          url: 'https://www.messenger.com',
          title: 'Visit Messenger',
        },
        {
          type: 'postback',
          title: 'Postback Button',
          payload: 'DEVELOPER_DEFINED_PAYLOAD',
        },
      ],
    },
  },
};

export const thePersistentMenu = {
  persistent_menu: [
    {
      locale: 'default',
      call_to_actions: [
        {
          type: 'postback',
          title: 'Talk to an agent',
          payload: 'CARE_HELP',
        },
        {
          type: 'postback',
          title: 'Outfit suggestions',
          payload: 'CURATION',
        },
        {
          type: 'web_url',
          title: 'Shop now',
          url: 'https://www.originalcoastclothing.com/',
        },
      ],
    },
  ],
};
