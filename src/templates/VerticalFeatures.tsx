import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div dir="rtl">
    <Section>
      <VerticalFeatureRow
        title="DevOps Services"
        description="تیم ما تشکیب شدخ"
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
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </div>
);

export { VerticalFeatures };
