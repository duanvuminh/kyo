export enum PracticeCardMode {
  PRACTICE = "practice",
  WRITE = "write",
  READ = "read",
  FLASH_CARD = "flash",
  DEFAULT = "default",
}

export const MODE_MAP = {
  practice: PracticeCardMode.PRACTICE,
  flash: PracticeCardMode.FLASH_CARD,
  write: PracticeCardMode.WRITE,
  read: PracticeCardMode.READ,
  default: PracticeCardMode.DEFAULT,
} as const;
