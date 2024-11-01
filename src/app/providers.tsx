

import {ThemeProvider} from "next-themes";
import { ReactNode } from "react";

type ProvidersProps={
    children:ReactNode;
}


const Providers:React.FC<ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">{children}</ThemeProvider>
  )
}

export default Providers