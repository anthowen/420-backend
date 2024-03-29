import { randomNumber } from './number';
import { Bud } from 'src/types';
import * as budNames from '../../data/budNames.json';
import * as budGenders from '../../data/budGenders.json';
import * as budShines from '../../data/budShines.json';
import * as budColors from '../../data/budColors.json';
import { BudShine, BudGender, BudColor } from '@prisma/client';

type Options = {
  maxThc?: number;
  maxBudSize?: number;
  targetGender?: BudGender;
  targetName?: string;
  targetImage?: string;
  gen1?: boolean;
};

const defaultOptions: Options = {
  maxThc: 22,
  maxBudSize: 20,
  gen1: false,
};

/**
 * Generate a bud with random properties.
 *
 * If `targetGender` is provided, generated bud's gender will be overrided
 * `maxThc` is used to limit the max possible THC value. Default is 22
 * `maxBudSize` is used to limit the max possible bud size. Default is 20
 *
 * @param param0 RandomOptions: { maxThc, maxBudSize, targetGender }
 * @returns Bud
 */
export const generateRandomBud = (_options = defaultOptions): Bud => {
  const options = {
    ...defaultOptions,
    ..._options,
  };
  const { maxThc, gen1, maxBudSize, targetGender, targetName, targetImage } = options;

  // Get name and image pair
  const nameAndImage = budNames[randomNumber(budNames.length)];

  const randomBud: Bud = {
    name: nameAndImage.name,
    image: gen1 ? nameAndImage.gen1Video : nameAndImage.image,
    thc: randomNumber(maxThc, 1),
    budSize: randomNumber(maxBudSize, 1),
    shine: budShines[randomNumber(budShines.length)] as BudShine,
    gender: budGenders[randomNumber(budGenders.length)] as BudGender,
    color: budColors[randomNumber(budColors.length)] as BudColor,
  };

  if (targetGender) {
    randomBud.gender = targetGender;
  }

  if (targetName) {
    randomBud.name = targetName;
  }

  if (targetImage) {
    randomBud.image = targetImage;
  }

  return randomBud;
};
