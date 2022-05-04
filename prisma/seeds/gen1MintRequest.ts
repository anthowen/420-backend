import * as crypto from 'crypto';

const LENGTH = 16;
const TOTAL_SUPPLY = 30;

const generateRequestIds = (): string[] => {
  const _generateRandomId = (): string => {
    const hex = crypto.randomBytes(LENGTH).toString('hex');

    return hex;
  };

  const _generateIds = (amount: number): string[] => {
    const result = [];
    const duplicates: Record<string, boolean> = {};

    for (let i = 0; i < amount; i++) {
      const id = _generateRandomId();

      if (duplicates[id]) {
        i--;
        continue;
      } else {
        duplicates[id] = true;
        result.push(id);
      }
    }

    return result;
  };

  const ids = _generateIds(TOTAL_SUPPLY);

  return ids;
};

export default generateRequestIds;