import { FC, PropsWithChildren } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

export const MainLayout: FC<PropsWithChildren<MetaHeadProps>> = ({
  children,
  metaTitle,
  metaDescription,
  metaImage,
  metaUrl,
}) => {
  return (
    <>
      <MetaHead
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        metaUrl={metaUrl}
      />
      <div className="min-h-[calc(100vh-120px)] pb-4">
        <div className="px-4 mx-auto max-w-7xl">
          <div>{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

MainLayout.displayName = 'MainLayout';
