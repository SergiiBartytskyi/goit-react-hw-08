import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface IDocumentTitleProps {
  children: string;
}

const DocumentTitle: FC<IDocumentTitleProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default DocumentTitle;
