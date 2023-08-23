import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_SERVICE_ID } from '@constants/service';
import { fadeVariants, commonMotionProps } from '@utils/motion';
import Skeleton from '@components/common/Skeleton';
import Button from '../common/Button';

type CategoryListProps = {
  onClick: (categoryId: string) => void;
};

export default function CategoryList({ onClick }: CategoryListProps) {
  const [serviceId, setServiceId] = useState<string>(DEFAULT_SERVICE_ID);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`/api/services`).then((response) => setServices(response.data.services));
    return () => setServices([]);
  }, []);

  if (services.length === 0) return <Skeleton.CategoryListItem />;

  return (
    <div className="flex mt-14 overflow-auto whitespace-nowrap" id="categoryList">
      <motion.div {...commonMotionProps} variants={fadeVariants('linear')}>
        <Button
          isPrimary
          type="button"
          onClick={() => {
            onClick(DEFAULT_SERVICE_ID);
            setServiceId(DEFAULT_SERVICE_ID);
          }}
          className={`
            h-10 px-8 !text-sm rounded-full cursor-pointer ms-auto mr-5 transition-all !shadow-none
            ${
              serviceId === '000000-0000-0000-0000-000000000000'
                ? '!bg-palatinate-blue !text-white'
                : '!bg-[#E8EAFF] !text-palatinate-blue'
            } 
          `}
        >
          All
        </Button>
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={service.id}
          custom={0}
          {...commonMotionProps}
          variants={fadeVariants('linear')}
        >
          <Button
            key={index}
            isPrimary
            type="button"
            onClick={() => {
              onClick(service.id);
              setServiceId(service.id);
            }}
            className={`
              h-10 px-8 !text-sm rounded-full !shadow-none cursor-pointer mr-5 transition-all w-auto
              ${
                serviceId === service.id
                  ? '!bg-palatinate-blue !text-white'
                  : '!bg-[#E8EAFF] !text-palatinate-blue'
              } 
            `}
          >
            {service.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
