export default {
  palettes: [
    [[195, 85, 53], [265, 64, 40], [340, 85, 53], [25, 85, 53], [50, 100, 75]],
    [[346, 86, 50], [30, 85, 53], [60, 85, 53], [109, 85, 53], [200, 85, 53], [240, 73, 50], [270, 85, 53]],
    [[218, 56, 12], [349, 31, 64], [18, 100, 84]],
    [[276, 71, 46], [9, 86, 50], [53, 100, 70]],
    [[210, 57, 53], [199, 100, 70]],
    [[270, 50, 13], [225, 50, 26]],
    [[320, 100, 70], [266, 69, 56], [166, 100, 56]]],
  presets: [
    {
      label: 'Mobile',
      values: [
        {
          width: 640,
          height: 1152,
          label: 'iPhone 5/5s',
        },
        {
          width: 750,
          height: 1334,
          label: 'iPhone 6/7/8',
        },
        {
          width: 1080,
          height: 1920,
          label: 'iPhone 6+/7+/8+',
        },
        {
          width: 1125,
          height: 2436,
          label: 'iPhone X/Xs',
        },
        {
          width: 1242,
          height: 2688,
          label: 'iPhone Xs Max',
        },
        {
          width: 1440,
          height: 2960,
          label: 'Samsung Galaxy S8/S9',
        },
        {
          width: 1080,
          height: 1920,
          label: 'Google Pixel',
        },
        {
          width: 1440,
          height: 2960,
          label: 'Google Pixel XL',
        },
      ],
    },
    {
      label: 'Generic',
      values: [
        {
          width: 1280,
          height: 720,
          label: '1280x720',
        },
        {
          width: 1366,
          height: 768,
          label: '1366x768',
        },
        {
          width: 1920,
          height: 1080,
          label: '1920x1080',
        },
        {
          width: 3840,
          height: 2160,
          label: '3840x2160 (4K)',
        },
      ],
    },
  ],
};
