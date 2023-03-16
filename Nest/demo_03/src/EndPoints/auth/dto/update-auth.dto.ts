import { PartialType } from '@nestjs/mapped-types';
import { Register } from './register';

export class UpdateAuthDto extends PartialType(Register) {}
