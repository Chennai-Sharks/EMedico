import React from 'react';
import Header from './components/Header';
import CustomCard from 'widgets/CustomCard/CustomCard';
import { Divider, makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
interface PrivacyProps {}

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  divStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const Privacy: React.FC<PrivacyProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.divStyle}>
      <Header />
      <div className={classes.toolbar} />

      <CustomCard
        elevation={10}
        customStyle={{
          margin: '40px',
          marginLeft: match ? '5%' : '10%',
          marginRight: match ? '5%' : '10%',
          padding: '20px',
          paddingTop: '0px',
        }}
      >
        <h1>Privacy Policy</h1>
        <p>Last updated: July 21, 2021</p>
        <p>
          Your privacy is important to us. It is Maxillo's policy to respect
          your privacy and comply with any applicable law and regulation
          regarding any personal information and data we may collect about you,
          including across our website,{' '}
          <a href='https://www.maxillo.in'>https://www.maxillo.in</a>.
        </p>

        <h1>Information We Collect</h1>
        <p>
          Information we collect includes both information you knowingly and
          actively provide us when using or participating in any of our services
          and any information automatically sent by your devices in the course
          of accessing our products and services. We are using third party OAuth
          providers mainly Google. So we are collecting your data like email,
          name from google.
        </p>

        <h1>Personal Information and data</h1>
        <p>
          We may ask for personal information and data which may include one or
          more of the following: Name, Email. Legitimate Reasons for Processing
          Your Personal Information and data We only collect and use your
          personal information and data when we have a legitimate reason for
          doing so. In which instance, we only collect personal information and
          data that is reasonably necessary to provide our services to you.
        </p>

        <h1>Collection and Use of Information</h1>
        <p>
          We may collect personal information and data from you when you do any
          of the following on our website: Use a mobile device or web browser to
          access our content Contact us via email, social media, or on any
          similar technologies.
        </p>

        <h1>Security of Your Personal Information and data</h1>
        <p>
          When we collect and process personal information and data, and while
          we retain this information, we will protect it within our efforts to
          prevent loss and theft, as well as unauthorized access, disclosure,
          copying, use, or modification. <br /> <br /> Although we will do our
          best to protect the personal information and data you provide to us,
          we advise that no method of electronic transmission or storage is 100%
          secure, and no one can guarantee absolute data security.
        </p>

        <h1>Disclosure of Personal Information and data to Third Parties</h1>
        <p style={{ fontWeight: 'bold' }}>
          We are not sharing your personal information and data to any third
          party services.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          We do not aim any of our products or services directly at children
          under the age of 13, and we do not knowingly collect personal
          information and data about children under 13.
        </p>

        <h1>Changes to This Policy</h1>
        <p>
          At our discretion, we may change our privacy policy to reflect updates
          to our business processes, current acceptable practices, or
          legislative or regulatory changes. If we decide to change this privacy
          policy, we will post the changes here at the same link by which you
          are accessing this privacy policy.
          <br /> If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of
          your personal information and data.
        </p>

        <h1>Contact Us</h1>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul>
          <li>By email: neodemy2020@gmail.com</li>
        </ul>
      </CustomCard>
      <Divider style={{ width: '100%' }} />
      <p>Copyright 2021 Team Maxillo</p>
    </div>
  );
};
export default Privacy;
