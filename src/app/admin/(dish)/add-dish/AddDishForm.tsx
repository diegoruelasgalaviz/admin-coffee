'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ReactQuill from 'react-quill'
import { LuEraser, LuSave } from 'react-icons/lu'
import { DateFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '../../../../components'

//style
import 'react-quill/dist/quill.snow.css'

const AddDishForm = () => {
  let valueSnow = ''
  valueSnow = `<h5><span class="ql-size-large">Add a long description for your product</span></h5>`

  const credentialsManagementFormSchema = yup.object({
    productname: yup.string().required('Please enter your product name'),
    productCatagory: yup.string().required('Please select your product catagory'),
    sellingPrice: yup.number().required('Please enter your selling price'),
    costPrice: yup.number().required('Please enter your selling price'),
    quantity: yup.number().required('Please enter your quantity'),
    deliveryType: yup.string().required('Please select deliveryType'),
    description: yup.string().required('Please enter your description'),
    saleStartDate: yup.string().required('Please select Sale Start Date'),
    saleEndDate: yup.string().required('Please select Sale End Date'),
  })

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(credentialsManagementFormSchema),
  })
  return (
    <div className="xl:col-span-2">
      <form onSubmit={handleSubmit(() => {})} className="space-y-6">
        <div className="rounded-lg border border-default-200 p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <TextFormInput name="productname" type="text" label="Product Name" placeholder="Product Name" control={control} fullWidth />

              <SelectFormInput
                name="productCatagory"
                label="Product Catagory"
                id="product-catagory"
                instanceId="product-catagory"
                control={control}
                options={[
                  { value: 'Italian', label: 'Italian' },
                  { value: 'BBQ', label: 'BBQ' },
                  { value: 'Mexican', label: 'Mexican' },
                ]}
                fullWidth
              />
              <div className="grid gap-6 lg:grid-cols-2">
                <TextFormInput name="sellingPrice" type="text" label="Selling Price" placeholder="Selling Price" control={control} fullWidth />
                <TextFormInput name="costPrice" type="text" label="Cost Price" placeholder="Cost Price" control={control} fullWidth />
              </div>
              <TextFormInput name="quantity" type="text" label="Quantity" placeholder="Quantity in Stock" control={control} fullWidth />
              <SelectFormInput
                name="deliveryType"
                label="Delivery Type"
                id="delivery-catagory"
                instanceId="delivery-catagory"
                control={control}
                options={[
                  { value: 'Delivery', label: 'Delivery' },
                  { value: 'Pickup', label: 'Pickup' },
                  { value: 'Dine-in', label: 'Dine-in' },
                ]}
                fullWidth
              />
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-default-600">Discount</h4>
                <div className="flex items-center gap-4">
                  <label className="block text-sm text-default-600" htmlFor="addDiscount">
                    Add Discount
                  </label>
                  <input
                    type="checkbox"
                    id="addDiscount"
                    className="relative h-7 w-[3.25rem] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-default-200 transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:transition before:duration-200 before:ease-in-out checked:!bg-primary checked:bg-none checked:before:translate-x-full focus:ring-0 focus:ring-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-default-600">Expiry Date</h4>
                <div className="flex items-center gap-4">
                  <label className="block text-sm text-default-600" htmlFor="addExpiryDate">
                    Add Expiry Date
                  </label>
                  <input
                    type="checkbox"
                    id="addExpiryDate"
                    className="relative h-7 w-[3.25rem] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-default-200 transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:transition before:duration-200 before:ease-in-out checked:!bg-primary checked:bg-none checked:before:translate-x-full focus:ring-0 focus:ring-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <TextAreaFormInput name="description" label="Description" placeholder="short Description" rows={5} control={control} fullWidth />
              <div>
                <label className="mb-2 block text-sm font-medium text-default-900" htmlFor="editor">
                  Product Long Description
                </label>
                <div id="editor" className="h-44">
                  <ReactQuill defaultValue={valueSnow} theme="snow" style={{ height: '180px', paddingBottom: '26px' }} className="pb-1" />
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-default-600">Return Policy</h4>
                <div className="flex items-center gap-4">
                  <label className="block text-sm text-default-600" htmlFor="returnPolicy">
                    Returnable
                  </label>
                  <input
                    type="checkbox"
                    id="returnPolicy"
                    className="relative h-7 w-[3.25rem] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-default-200 transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:transition before:duration-200 before:ease-in-out checked:!bg-primary checked:bg-none checked:before:translate-x-full focus:ring-0 focus:ring-transparent"
                  />
                </div>
              </div>
              <div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <DateFormInput
                    name="saleStartDate"
                    type="date"
                    label="Sale Start On"
                    className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                    placeholder="12/9/2022"
                    options={{
                      dateFormat: 'd/m/Y',
                      enableTime: true,
                    }}
                    fullWidth
                    control={control}
                  />
                  <DateFormInput
                    name="saleEndDate"
                    type="date"
                    label="Sale End On"
                    className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                    placeholder="12/10/2022"
                    options={{
                      dateFormat: 'd/m/Y',
                      enableTime: true,
                    }}
                    fullWidth
                    control={control}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="reset"
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-6 py-2.5 text-center text-sm font-semibold text-red-500 shadow-sm transition-colors duration-200 hover:bg-red-500 hover:text-white"
              >
                <LuEraser size={20} />
                Clear
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
              >
                <LuSave size={20} />
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddDishForm
