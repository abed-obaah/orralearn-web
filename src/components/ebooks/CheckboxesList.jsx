
const CheckboxesList = ({listElements,title}) => {
    return (
        <div className={'flex flex-col gap-y-2.5'}>
            <h1 className={'font-bold text-lg'}>{title}</h1>
            <fieldset>
            {listElements.map((item,i)=>(
                <div className="space-y-5" key={i}>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id={item.name}
                                aria-describedby={item.described}
                                name={item.name}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor={item.name} className="font-medium text-gray-900">
                                {item.title}
                            </label>
                        </div>
                    </div>
                </div>
            ))}
            </fieldset>
        </div>
    );
};

export default CheckboxesList;