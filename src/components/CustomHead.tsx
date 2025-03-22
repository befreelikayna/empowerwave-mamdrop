
import React from 'react';
import { Helmet } from 'react-helmet';

interface CustomHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title = "MamaDrop - تمكين المرأة من خلال التسويق بالعمولة",
  description = "انضمي إلى MamaDrop، ومكّني 10,000 امرأة من الكسب من المنزل. ادعمي عائلتك من خلال التسويق بالعمولة باستخدام هاتفك المحمول فقط. ابدئي اليوم!",
  keywords = "التسويق بالعمولة للنساء,العمل من المنزل للنساء,برنامج MamaDrop للتسويق بالعمولة,التمكين المالي للمرأة,عمل من المنزل,دعم للمرأة المطلقة,دخل للأمهات في المنزل,ريادة الأعمال النسائية,دخل عبر الإنترنت للنساء,تسويق بالعمولة للنساء,تمكين المرأة MamaDrop,الكسب من المنزل,الدعم المالي للمرأة,فرص العمل من المنزل"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Language" content="ar" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script>
        {`
          document.addEventListener("DOMContentLoaded", function () {
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
            document.body.style.textAlign = "right";
          });
        `}
      </script>
    </Helmet>
  );
};

export default CustomHead;
