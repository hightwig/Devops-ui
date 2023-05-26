import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div dir="rtl">
    <Section>
      <VerticalFeatureRow
        title="DevOps as a Service"
        description="سرویس پارس دوآپس فرایندی بر مبنای ارتباط و همکاری هرچه بیشتر میان تیم‌های توسعهٔ نرم‌افزار و تیم‌های اجرایی بنا شده است که در طی این فرآیند عملیات توسعهٔ نرم‌افزار و همچنین اِعمال تغییرات زیرساختی به‌ صورت خودکار درمی‌آیند و در کل هدف از چنین فرایندی ایجاد فرهنگی است که در آن تولید، تست و انتشار نرم‌افزار به شیوه‌ای سریع، مداوم و مطمئن انجام شود."
        image="\assets\images\DevopsService.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Reliability"
        description=" با استفاده از سرویس ما ، می‌توانید از کیفیت به‌ روز رسانی‌های برنامه‌ها و تغییرات زیرساخت اطمینان حاصل کنید تا بتوانید ضمن حفظ تجربه‌ای مثبت برای کاربران نهایی، با سرعت بالاتر محصولات را به آن‌ها تحویل دهید."
        image="\assets\images\reliability.png"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Scalibility"
        description="پارس دوآپس این امکان را میدهد تا بتوانید زیرساخت‌ها و فرآیندهای توسعه خود را در مقیاس مناسب مدیریت و راه‌اندازی کنید. اتوماسیون و ثبات سرویس دهی به شما کمک می‌کند تا سامانه‌های پچیده و در حال تغییر را به صورت کارآمد و با کاهش خطرات احتمالی مدیریت کنید"
        image="\assets\images\scalibility.png"
        imageAlt="Third feature alt text"
      />
      <VerticalFeatureRow
        title="Customer satisfaction"
        description="سرویس پارس دوآپس به شما کمک میکند فرآیند توسعه، تست و انتشار نرم‌افزار به صورت خودکار و مداوم انجام شود. این ویژگی باعث می‌شود که زمان تحویل نرم‌افزار به مشتریان کاهش یابد،  کیفیت آن بهبود پیدا کند و خطاهای احتمالی در طول فرآیند به حداقل برسند."
        image="\assets\images\feature3.svg"
        imageAlt=" feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Security"
        description="با استفاده از خدمات ما میتوانید در مارحل و فاز های مختلف از امنیت محصول خود اطمینان حاصب کنید و با  استفاده از اسکن های تخصصی پارس دوآپس از آسیب پذیری های محصول خود مطلع شوید."
        image="\assets\images\Security.png"
        imageAlt=" feature alt text"
      />
    </Section>
  </div>
);

export { VerticalFeatures };
