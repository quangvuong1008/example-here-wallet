import { FC, useEffect } from "react";
import { ExampleTON } from "./ExampleTON";
import { ExampleSolana } from "./ExambleSolana";
import { ExampleEVM } from "./ExampleEVM";
import { ExampleNEAR } from "./ExampleNEAR";
import axios from 'axios';

// Add this type declaration at the top of the file
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: any;
      };
    };
  }
}

const App: FC = () => {
  console.log('window.Telegram.WebApp.initDataUnsafe', window.Telegram.WebApp.initDataUnsafe)
  // call axios login -telegram
  /**
       * export class TelegramPayloadDto {
      @ApiProperty({
        description: 'The authentication date of the Telegram payload',
        example: '1627384956',
      })
      @IsString()
      @IsNotEmpty()
      auth_date: string;

      @ApiProperty({
        description: 'The hash of the Telegram payload for verification',
        example: 'd2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2',
      })
      @IsString()
      @IsNotEmpty()
      hash: string;

      @ApiProperty({
        description: 'The user information in JSON string format',
        example:
          '{"id":1902691737,"first_name":"C","last_name":"G","username":"chinhvuong","language_code":"en","allows_write_to_pm":true}',
      })
      @IsString()
      @IsNotEmpty()
      user: string;

      @ApiProperty({
        description: 'Query Id',
        example: 'AAGZxWhxAAAAAJnFaHH97cGf',
      })
      @IsString()
      @IsNotEmpty()
      query_id: string;
    }
   */
  useEffect(() => {
    // convert user to string
    const user = JSON.stringify(window.Telegram.WebApp.initDataUnsafe.user);
    axios.post('http://localhost:3000/auth/sign-in-by-telegram', {
      auth_date: window.Telegram.WebApp.initDataUnsafe.auth_date,
      hash: window.Telegram.WebApp.initDataUnsafe.hash,
      user: user,
      query_id: window.Telegram.WebApp.initDataUnsafe.query_id,
    })
  }, [])

  return (
    <>
      <ExampleTON />
      <ExampleSolana />
      <ExampleEVM />
      <ExampleNEAR />
    </>
  );
};

export default App;
