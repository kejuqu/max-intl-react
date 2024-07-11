import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useModel } from '@umijs/max';
import { defineMessages } from 'react-intl';
import styles from './index.less';

export const intlObj = defineMessages({
  translationKey1: {
    id: 'translationKey1',
    defaultMessage: '无双',
  },
  translationKey2: {
    id: 'translationKey2',
    defaultMessage: '周杰伦2',
  },
  translationKey3: {
    id: 'translationKey3',
    defaultMessage: '周杰伦3',
  },
  translationKey4: {
    id: 'translationKey4',
    defaultMessage: '周杰伦4',
  },
  translationKey5: {
    id: 'translationKey5',
    defaultMessage: '周杰伦5',
  },
});

export const intlObj2 = defineMessages({
  translationKey11: {
    id: 'translationKey11',
    defaultMessage: '无双',
  },
  translationKey21: {
    id: 'translationKey21',
    defaultMessage: '周杰伦21',
  },
  translationKey22: {
    id: 'translationKey22',
    defaultMessage: '周杰伦22',
  },
  translationKey23: {
    id: 'translationKey23',
    defaultMessage: '周杰伦23',
  },
  translationKey24: {
    id: 'translationKey24',
    defaultMessage: '周杰伦24',
  },
});

console.log('intlObj: ', intlObj);
const HomePage: React.FC = () => {
  const intl = useIntl();
  const { formatMessage: t } = intl;

  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <FormattedMessage id="welcome" defaultMessage="你好" />
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>

      {Object.entries(intlObj).map(([key, value], i) => {
        return (
          <div key={key} className={`bg-red-${i + 1}00`}>
            {t(value)}
          </div>
        );
      })}
    </PageContainer>
  );
};

export default HomePage;
