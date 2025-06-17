import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({ description: 'Name of the person' })
  @IsString()
  name: string;

  @ApiProperty({ 
    description: 'Birth date of the person', 
    type: String, 
    format: 'date', 
  })
  @IsString()
  birthDate: Date;

  @ApiProperty({ 
    description: 'Gender of the person', 
    enum: ['male', 'female', 'other'], 
  })
  @IsString()
  gender: 'male' | 'female' | 'other';

  companyId: string;

 
  
}