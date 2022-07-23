import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8evu3p06',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skbIgVRPh6IQzB9wxqwW1xtBe3NuIgFMt3xbEeIqZDUeBiRKgpxNC6zW6znFnYfQL0kTeUfmvhzQcddHULJ8BTDzSZmXK1GO2nVTqaSKjhDtc0lHoiOaJ3AIozfX2A0kj7mja24csBm7Gy7G1TeZK3lrtYAJzmcASuftHJrdGT3Q49HJoH1m',
  useCdn: false,
})