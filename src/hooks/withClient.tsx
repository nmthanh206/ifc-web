import React, { useEffect, useState } from "react";

type WithClientProps = {
   children?: React.ReactNode;
};
function withClient<T extends WithClientProps>(
   Component: React.ComponentType<T>,
) {
   return function ClientOnlyComponent({ children, ...rest }: T) {
      const [isClient, setClient] = useState(false);

      useEffect(() => {
         setClient(true);
      }, []);

      return (
         <>{isClient && <Component {...(rest as T)}>{children}</Component>}</>
      );
   };
}

export default withClient;
