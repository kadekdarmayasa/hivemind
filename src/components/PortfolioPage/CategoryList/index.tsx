import Button from "components/Button"

export default function CategoryList({ categoryList }: { categoryList: string[] }): JSX.Element {
  return (
    <div className="flex justify-center mt-8">
      {categoryList.map((item, index) => {
        return (
          <Button
            key={index}
            type="button"
            classNames={[
              '!bg-[#E8EAFF]',
              'h-10', 'px-8',
              '!text-sm',
              'rounded-full',
              'cursor-pointer',
              `${index === 0 ? 'ms-0 !bg-palatinate-blue !text-white' : 'ms-5'}`,
              'hover:!bg-palatinate-blue',
              'hover:!text-white',
              'transition-all'
            ]}
          >
            {item}
          </Button>
        );
      })}
    </div>
  )
}