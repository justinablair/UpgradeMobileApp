import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet, SectionList} from 'react-native';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import CheckboxToggle from '../components/CheckboxToggle';
import SearchIcon from '../components/theme/SearchIcon';

interface Item {
  flag: any; // Change 'any' to the actual type of 'flag'
  name: string; // Change 'string' to the actual type of 'name'
}

type Nationality = {
  name: string;
  flag: any; // Assume the image resource identifier (require('./path/to/image.png'))
};

type UpgradeNationalityListProps = NavigationProps<'UpgradeNationality'>;

const UpgradeNationalityScreen: React.FC<UpgradeNationalityListProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    // Check if any checkbox other than 'United Kingdom' is selected
    const isOtherSelected = Object.keys(checkboxStates).some(
      name => name !== 'United Kingdom' && checkboxStates[name],
    );

    if (isOtherSelected) {
      navigation.navigate('UpgradeIneligible');
    } else {
      navigation.navigate('UpgradeUSPerson');
    }
  };

  const frequentlySelectedNationalities: Nationality[] = [
    {
      name: 'United Kingdom',
      flag: require('../assets/Flags/UnitedKingdom.png'),
    },
    {
      name: 'Poland',
      flag: require('../assets/Flags/Poland.png'),
    },
    {
      name: 'Romania',
      flag: require('../assets/Flags/Romania.png'),
    },
    {
      name: 'India',
      flag: require('../assets/Flags/India.png'),
    },

    {
      name: 'Italy',
      flag: require('../assets/Flags/Italy.png'),
    },

    {
      name: 'Portugal',
      flag: require('../assets/Flags/Portugal.png'),
    },
  ];

  const allNationalities: Nationality[] = [
    {name: 'Afghanistan', flag: require('../assets/Flags/Afghanistan.png')},
    {name: 'Albania', flag: require('../assets/Flags/Albania.png')},
    {name: 'Algeria', flag: require('../assets/Flags/Algeria.png')},
    {name: 'Andorra', flag: require('../assets/Flags/Andorra.png')},
    {name: 'Angola', flag: require('../assets/Flags/Angola.png')},
    {name: 'Anguilla', flag: require('../assets/Flags/Anguilla.png')},
    {
      name: 'Antigua and Barbuda',
      flag: require('../assets/Flags/AntiguaAndBarbuda.png'),
    },
    {name: 'Argentina', flag: require('../assets/Flags/Argentina.png')},
    {name: 'Armenia', flag: require('../assets/Flags/Armenia.png')},
    {name: 'Australia', flag: require('../assets/Flags/Australia.png')},
    {name: 'Austria', flag: require('../assets/Flags/Austria.png')},
    {name: 'Azerbaijan', flag: require('../assets/Flags/Azerbaijan.png')},
    {name: 'Bahamas', flag: require('../assets/Flags/Bahamas.png')},
    {name: 'Bahrain', flag: require('../assets/Flags/Bahrain.png')},
    {name: 'Bangladesh', flag: require('../assets/Flags/Bangladesh.png')},
    {name: 'Barbados', flag: require('../assets/Flags/Barbados.png')},
    {name: 'Belarus', flag: require('../assets/Flags/Belarus.png')},
    {name: 'Belgium', flag: require('../assets/Flags/Belgium.png')},
    {name: 'Belize', flag: require('../assets/Flags/Belize.png')},
    {name: 'Benin', flag: require('../assets/Flags/Benin.png')},
    {name: 'Bermuda', flag: require('../assets/Flags/Bermuda.png')},
    {name: 'Bhutan', flag: require('../assets/Flags/Bhutan.png')},
    {name: 'Bolivia', flag: require('../assets/Flags/Bolivia.png')},
    {
      name: 'Bosnia and Herzegovina',
      flag: require('../assets/Flags/BosniaAndHerzegovina.png'),
    },
    {name: 'Botswana', flag: require('../assets/Flags/Botswana.png')},
    {name: 'Brazil', flag: require('../assets/Flags/Brazil.png')},
    {
      name: 'British Virgin Islands',
      flag: require('../assets/Flags/BritishVirginIslands.png'),
    },
    {
      name: 'Brunei',
      flag: require('../assets/Flags/Brunei.png'),
    },
    {name: 'Bulgaria', flag: require('../assets/Flags/Bulgaria.png')},
    {name: 'Burkina Faso', flag: require('../assets/Flags/BurkinaFaso.png')},
    {name: 'Burundi', flag: require('../assets/Flags/Burundi.png')},
    {name: 'Cambodia', flag: require('../assets/Flags/Cambodia.png')},
    {name: 'Cameroon', flag: require('../assets/Flags/Cameroon.png')},
    {name: 'Canada', flag: require('../assets/Flags/Canada.png')},
    {name: 'Cape Verde', flag: require('../assets/Flags/CapeVerde.png')},
    {
      name: 'Cayman Islands',
      flag: require('../assets/Flags/CaymanIslands.png'),
    },
    {
      name: 'Central African Republic',
      flag: require('../assets/Flags/CentralAfricanRepublic.png'),
    },
    {name: 'Chad', flag: require('../assets/Flags/Chad.png')},
    {name: 'Chile', flag: require('../assets/Flags/Chile.png')},
    {name: 'China', flag: require('../assets/Flags/China.png')},
    {name: 'Colombia', flag: require('../assets/Flags/Colombia.png')},
    {name: 'Comoros', flag: require('../assets/Flags/Comoros.png')},

    {name: 'Cook Islands', flag: require('../assets/Flags/CookIslands.png')},
    {name: 'Costa Rica', flag: require('../assets/Flags/CostaRica.png')},
    {name: 'Croatia', flag: require('../assets/Flags/Croatia.png')},
    {name: 'Cuba', flag: require('../assets/Flags/Cuba.png')},
    {name: 'Cyprus', flag: require('../assets/Flags/Cyprus.png')},
    {
      name: 'Czech Republic',
      flag: require('../assets/Flags/CzechRepublic.png'),
    },
    {
      name: 'DemocraticRepublicOfTheCongo',
      flag: require('../assets/Flags/DemocraticRepublicOfTheCongo.png'),
    },

    {name: 'East Timor', flag: require('../assets/Flags/EastTimor.png')},
    {name: 'Ecuador', flag: require('../assets/Flags/Ecuador.png')},
    {name: 'Egypt', flag: require('../assets/Flags/Egypt.png')},
    {name: 'El Salvador', flag: require('../assets/Flags/ElSalvador.png')},
    {name: 'England', flag: require('../assets/Flags/England.png')},
    {
      name: 'Equatorial Guinea',
      flag: require('../assets/Flags/EquatorialGuinea.png'),
    },
    {name: 'Eritrea', flag: require('../assets/Flags/Eritrea.png')},
    {name: 'Estonia', flag: require('../assets/Flags/Estonia.png')},
    {name: 'Ethiopia', flag: require('../assets/Flags/Ethiopia.png')},
    {name: 'Faroe Islands', flag: require('../assets/Flags/FaroeIslands.png')},
    {name: 'Fiji', flag: require('../assets/Flags/Fiji.png')},
    {name: 'Finland', flag: require('../assets/Flags/Finland.png')},
    {name: 'France', flag: require('../assets/Flags/France.png')},
    {name: 'Gabon', flag: require('../assets/Flags/Gabon.png')},
    {name: 'Gambia', flag: require('../assets/Flags/Gambia.png')},
    {name: 'Georgia', flag: require('../assets/Flags/Georgia.png')},
    {name: 'Germany', flag: require('../assets/Flags/Germany.png')},
    {name: 'Ghana', flag: require('../assets/Flags/Ghana.png')},
    {name: 'Gibraltar', flag: require('../assets/Flags/Gibraltar.png')},
    {name: 'Greece', flag: require('../assets/Flags/Greece.png')},
    {name: 'Greenland', flag: require('../assets/Flags/Greenland.png')},
    {name: 'Grenada', flag: require('../assets/Flags/Grenada.png')},
    {name: 'GuamUS', flag: require('../assets/Flags/GuamUS.png')},
    {name: 'Guatemala', flag: require('../assets/Flags/Guatemala.png')},
    {name: 'Guinea', flag: require('../assets/Flags/Guinea.png')},
    {name: 'Guinea Bissau', flag: require('../assets/Flags/GuineaBissau.png')},
    {name: 'Guyana', flag: require('../assets/Flags/Guyana.png')},
    {name: 'Haiti', flag: require('../assets/Flags/Haiti.png')},
    {name: 'Honduras', flag: require('../assets/Flags/Honduras.png')},
    {name: 'Hong Kong', flag: require('../assets/Flags/HongKong.png')},
    {name: 'Hungary', flag: require('../assets/Flags/Hungary.png')},
    {name: 'Iceland', flag: require('../assets/Flags/Iceland.png')},
    {name: 'India', flag: require('../assets/Flags/India.png')},
    {name: 'Indonesia', flag: require('../assets/Flags/Indonesia.png')},
    {name: 'Iran', flag: require('../assets/Flags/Iran.png')},
    {name: 'Iraq', flag: require('../assets/Flags/Iraq.png')},
    {name: 'Ireland', flag: require('../assets/Flags/Ireland.png')},
    {name: 'Israel', flag: require('../assets/Flags/Israel.png')},
    {name: 'Italy', flag: require('../assets/Flags/Italy.png')},
    {name: 'Ivory Coast', flag: require('../assets/Flags/IvoryCoast.png')},
    {name: 'Jamaica', flag: require('../assets/Flags/Jamaica.png')},
    {name: 'Japan', flag: require('../assets/Flags/Japan.png')},
    {name: 'Jordan', flag: require('../assets/Flags/Jordan.png')},
    {name: 'Kazakhstan', flag: require('../assets/Flags/Kazakhstan.png')},
    {name: 'Kenya', flag: require('../assets/Flags/Kenya.png')},
    {name: 'Kiribati', flag: require('../assets/Flags/Kiribati.png')},
    {name: 'Kosovo', flag: require('../assets/Flags/Kosovo.png')},
    {name: 'Kuwait', flag: require('../assets/Flags/Kuwait.png')},
    {name: 'Kyrgyzstan', flag: require('../assets/Flags/Kyrgyzstan.png')},
    {name: 'Laos', flag: require('../assets/Flags/Laos.png')},
    {name: 'Latvia', flag: require('../assets/Flags/Latvia.png')},
    {name: 'Lebanon', flag: require('../assets/Flags/Lebanon.png')},
    {name: 'Liberia', flag: require('../assets/Flags/Liberia.png')},
    {name: 'Libya', flag: require('../assets/Flags/Libya.png')},
    {name: 'Liechtenstein', flag: require('../assets/Flags/Liechtenstein.png')},
    {name: 'Lithuania', flag: require('../assets/Flags/Lithuania.png')},
    {name: 'Luxembourg', flag: require('../assets/Flags/Luxembourg.png')},
    {name: 'Macedonia', flag: require('../assets/Flags/Macedonia.png')},
    {name: 'Madagascar', flag: require('../assets/Flags/Madagascar.png')},
    {name: 'Malawi', flag: require('../assets/Flags/Malawi.png')},
    {name: 'Malaysia', flag: require('../assets/Flags/Malaysia.png')},
    {name: 'Maldives', flag: require('../assets/Flags/Maldives.png')},
    {name: 'Mali', flag: require('../assets/Flags/Mali.png')},
    {name: 'Malta', flag: require('../assets/Flags/Malta.png')},
    {
      name: 'Marshall Islands',
      flag: require('../assets/Flags/MarshallIslands.png'),
    },
    {name: 'Martinique', flag: require('../assets/Flags/Martinique.png')},
    {name: 'Mauritania', flag: require('../assets/Flags/Mauritania.png')},
    {name: 'Mauritius', flag: require('../assets/Flags/Mauritius.png')},
    {name: 'Mexico', flag: require('../assets/Flags/Mexico.png')},
    {name: 'Moldova', flag: require('../assets/Flags/Moldova.png')},
    {name: 'Monaco', flag: require('../assets/Flags/Monaco.png')},
    {name: 'Mongolia', flag: require('../assets/Flags/Mongolia.png')},
    {name: 'Montenegro', flag: require('../assets/Flags/Montenegro.png')},
    {name: 'Montserrat', flag: require('../assets/Flags/Montserrat.png')},
    {name: 'Morocco', flag: require('../assets/Flags/Morocco.png')},
    {name: 'Mozambique', flag: require('../assets/Flags/Mozambique.png')},
    {name: 'Myanmar Burma', flag: require('../assets/Flags/MyanmarBurma.png')},
    {name: 'Namibia', flag: require('../assets/Flags/Namibia.png')},
    {
      name: 'Naru Yaren District',
      flag: require('../assets/Flags/NaruYarenDistrict.png'),
    },
    {name: 'Nepal', flag: require('../assets/Flags/Nepal.png')},
    {name: 'Netherlands', flag: require('../assets/Flags/Netherlands.png')},
    {name: 'New Zealand', flag: require('../assets/Flags/NewZealand.png')},
    {name: 'Nicaragua', flag: require('../assets/Flags/Nicaragua.png')},
    {name: 'Niger', flag: require('../assets/Flags/Niger.png')},
    {name: 'Nigeria', flag: require('../assets/Flags/Nigeria.png')},
    {name: 'Niue', flag: require('../assets/Flags/Niue.png')},
    {name: 'North Korea', flag: require('../assets/Flags/NorthKorea.png')},
    {
      name: 'Northern Ireland',
      flag: require('../assets/Flags/NorthernIreland.png'),
    },
    {name: 'Norway', flag: require('../assets/Flags/Norway.png')},
    {name: 'Oman', flag: require('../assets/Flags/Oman.png')},
    {name: 'Pakistan', flag: require('../assets/Flags/Pakistan.png')},
    {name: 'Palau', flag: require('../assets/Flags/Palau.png')},
    {name: 'Palestine', flag: require('../assets/Flags/Palestine.png')},
    {name: 'Panama', flag: require('../assets/Flags/Panama.png')},
    {
      name: 'Papua New Guinea',
      flag: require('../assets/Flags/PapuaNewGuinea.png'),
    },
    {name: 'Paraguay', flag: require('../assets/Flags/Paraguay.png')},
    {name: 'Peru', flag: require('../assets/Flags/Peru.png')},
    {name: 'Philippines', flag: require('../assets/Flags/Philippines.png')},
    {
      name: 'Pitcairn Islands',
      flag: require('../assets/Flags/PitcairnIslands.png'),
    },
    {name: 'Poland', flag: require('../assets/Flags/Poland.png')},
    {name: 'Portugal', flag: require('../assets/Flags/Portugal.png')},
    {name: 'Puerto Rico', flag: require('../assets/Flags/PuertoRico.png')},
    {name: 'Qatar', flag: require('../assets/Flags/Qatar.png')},
    {
      name: 'Republic Of The Congo',
      flag: require('../assets/Flags/RepublicOfTheCongo.png'),
    },
    {name: 'Romania', flag: require('../assets/Flags/Romania.png')},
    {name: 'Russia', flag: require('../assets/Flags/Russia.png')},
    {name: 'Rwanda', flag: require('../assets/Flags/Rwanda.png')},
    {
      name: 'Saint Kitts and Nevis',
      flag: require('../assets/Flags/SaintKittsAndNevis.png'),
    },
    {name: 'Saint Lucia', flag: require('../assets/Flags/SaintLucia.png')},
    {
      name: 'Saint Vincent and The Grenadines',
      flag: require('../assets/Flags/StVincentAndGrenadines.png'),
    },
    {name: 'San Marino', flag: require('../assets/Flags/SanMarino.png')},
    //Why is the a lowercase
    {
      name: 'Sao Tome and Principe',
      flag: require('../assets/Flags/SaoTomeAndPrincipe.png'),
    },
    {name: 'Saudi Arabia', flag: require('../assets/Flags/SaudiArabia.png')},
    {name: 'Scotland', flag: require('../assets/Flags/Scotland.png')},
    {name: 'Senegal', flag: require('../assets/Flags/Senegal.png')},
    {name: 'Serbia', flag: require('../assets/Flags/Serbia.png')},
    {name: 'Seychelles', flag: require('../assets/Flags/Seychelles.png')},
    {name: 'Sierra Leone', flag: require('../assets/Flags/SierraLeone.png')},
    {name: 'Singapore', flag: require('../assets/Flags/Singapore.png')},
    {name: 'Slovakia', flag: require('../assets/Flags/Slovakia.png')},
    {name: 'Slovenia', flag: require('../assets/Flags/Slovenia.png')},
    {
      name: 'Solomon Islands',
      flag: require('../assets/Flags/SolomonIslands.png'),
    },
    {name: 'Somalia', flag: require('../assets/Flags/Somalia.png')},
    {name: 'South Africa', flag: require('../assets/Flags/SouthAfrica.png')},
    {name: 'South Korea', flag: require('../assets/Flags/SouthKorea.png')},
    {name: 'South Sudan', flag: require('../assets/Flags/SouthSudan.png')},
    {name: 'Spain', flag: require('../assets/Flags/Spain.png')},
    {name: 'Sri Lanka', flag: require('../assets/Flags/SriLanka.png')},
    {name: 'Stateless', flag: require('../assets/Flags/Stateless.png')},
    {name: 'St Helena', flag: require('../assets/Flags/StHelena.png')},
    {name: 'Sudan', flag: require('../assets/Flags/Sudan.png')},
    {name: 'Suriname', flag: require('../assets/Flags/Suriname.png')},
    {name: 'Swaziland', flag: require('../assets/Flags/Swaziland.png')},
    {name: 'Sweden', flag: require('../assets/Flags/Sweden.png')},
    {name: 'Switzerland', flag: require('../assets/Flags/Switzerland.png')},
    {name: 'Syria', flag: require('../assets/Flags/Syria.png')},
    {name: 'Taiwan', flag: require('../assets/Flags/Taiwan.png')},
    {name: 'Tajikistan', flag: require('../assets/Flags/Tajikistan.png')},
    {name: 'Tanzania', flag: require('../assets/Flags/Tanzania.png')},
    {name: 'Thailand', flag: require('../assets/Flags/Thailand.png')},
    {name: 'Togo', flag: require('../assets/Flags/Togo.png')},
    {name: 'Tonga', flag: require('../assets/Flags/Tonga.png')},
    {
      name: 'Trinidad and Tobago',
      flag: require('../assets/Flags/TrinidadAndTobago.png'),
    },
    {
      name: 'Tristan Da Cunha',
      flag: require('../assets/Flags/TristanDaCunha.png'),
    },
    {name: 'Tunisia', flag: require('../assets/Flags/Tunisia.png')},
    {name: 'Turkey', flag: require('../assets/Flags/Turkey.png')},
    {name: 'Turkmenistan', flag: require('../assets/Flags/Turkmenistan.png')},
    {
      name: 'Turks and Caicos Islands',
      flag: require('../assets/Flags/TurksAndCaicosIslands.png'),
    },
    {name: 'Tuvalu', flag: require('../assets/Flags/Tuvalu.png')},
    {name: 'Uganda', flag: require('../assets/Flags/Uganda.png')},
    {name: 'Ukraine', flag: require('../assets/Flags/Ukraine.png')},
    {
      name: 'United Arab Emirates',
      flag: require('../assets/Flags/UnitedArabEmirates.png'),
    },
    {
      name: 'United Kingdom',
      flag: require('../assets/Flags/UnitedKingdom.png'),
    },
    {
      name: 'United States Of America',
      flag: require('../assets/Flags/UnitedStatesOfAmerica.png'),
    },
    {name: 'Uruguay', flag: require('../assets/Flags/Uruguay.png')},
    {name: 'Uzbekistan', flag: require('../assets/Flags/Uzbekistan.png')},
    {name: 'Vanuatu', flag: require('../assets/Flags/Vanuatu.png')},
    {name: 'Vatican City', flag: require('../assets/Flags/VaticanCity.png')},
    {name: 'Venezuela', flag: require('../assets/Flags/Venezuela.png')},
    {name: 'Vietnam', flag: require('../assets/Flags/Vietnam.png')},
    {name: 'Wales', flag: require('../assets/Flags/Wales.png')},
    {
      name: 'Wallis and Fortuna',
      flag: require('../assets/Flags/WallisAndFortuna.png'),
    },
    {name: 'Western Samoa', flag: require('../assets/Flags/WesternSamoa.png')},
    {name: 'Yemen', flag: require('../assets/Flags/Yemen.png')},
    {name: 'Zambia', flag: require('../assets/Flags/Zambia.png')},
    {name: 'Zimbabwe', flag: require('../assets/Flags/Zimbabwe.png')},
  ];

  // Combine frequently selected and unique all nationalities into a single array
  const combinedNationalities: Nationality[] = [
    ...frequentlySelectedNationalities,
    ...allNationalities, // Now using uniqueAllNationalities
  ].filter(
    (nationality, index, self) =>
      index ===
      self.findIndex(
        n =>
          n.name.trim().toLowerCase() === nationality.name.trim().toLowerCase(),
      ),
  );
  // Sort the combined nationalities alphabetically by name
  combinedNationalities.sort((a, b) => a.name.localeCompare(b.name));

  // Initialize checkbox states using an object
  const initialCheckboxStates: {[key: string]: boolean} =
    combinedNationalities.reduce((acc, nationality) => {
      acc[nationality.name] = false;
      return acc;
    }, {} as {[key: string]: boolean});

  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>(initialCheckboxStates);

  const handleCheckboxToggle = (name: string) => {
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  // Create an object to store nationalities under their respective sections (A, B, C, etc.)
  const nationalitiesBySection: {
    [letter: string]: Nationality[];
  } = {};

  combinedNationalities.forEach(nationality => {
    const firstLetter = nationality.name.charAt(0).toUpperCase();
    if (!nationalitiesBySection[firstLetter]) {
      nationalitiesBySection[firstLetter] = [];
    }
    nationalitiesBySection[firstLetter].push(nationality);
  });

  const sectionData = [
    {
      letter: 'Frequently Selected',
      data: frequentlySelectedNationalities,
    },
    ...Object.keys(nationalitiesBySection).map(letter => ({
      letter,
      data: nationalitiesBySection[letter],
    })),
  ];

  //changes

  //changes
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNationalities, setFilteredNationalities] = useState<
    Nationality[]
  >([]);

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();

    if (lowercaseQuery === '') {
      // If the query is empty, show the default frequently selected nationalities
      setFilteredNationalities(frequentlySelectedNationalities);
    } else {
      // Filter the nationalities based on the search query
      const filtered = combinedNationalities.filter(nationality =>
        nationality.name.toLowerCase().includes(lowercaseQuery),
      );
      setFilteredNationalities(filtered);
    }

    setSearchQuery(query);
  };

  console.log('filteredNationalities length:', filteredNationalities.length);

  const renderNationality = ({
    item,
    index,
  }: {
    item: Nationality;
    index: number;
  }) => (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 27,
          paddingVertical: 10,
          paddingHorizontal: 16,
        }}>
        <Image
          source={item.flag}
          style={{width: 32, height: 32, marginRight: 10}}
        />
        <Text variant="bodyText" style={{color: 'black', padding: 10}}>
          {item.name}
        </Text>
        <View style={{marginLeft: 'auto', marginRight: 8}}>
          <CheckboxToggle
            checked={checkboxStates[item.name]}
            onToggle={() => handleCheckboxToggle(item.name)}
          />
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );

  const renderSectionHeader = ({
    section: {letter},
  }: {
    section: {letter: string};
  }) => (
    <Text
      variant="bodyTextDescription"
      style={[styles.sectionHeader, {color: Colours.black30}]}>
      {letter}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: Colours.white}}>
        <Text
          variant="screenTitle leftAlign"
          style={[
            {color: Colours.black},
            styles.paddingLeft,
            styles.paddingTop,
          ]}>
          Add your tax residencies
        </Text>
        <Text
          variant="bodyText leftAlign"
          style={[{color: Colours.black}, styles.paddingLeft]}>
          Select all countries where you are a tax resident.
        </Text>
        <View style={styles.searchBar}>
          <SearchIcon />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <SectionList
        style={{border: '1px solid red'}}
        sections={
          searchQuery === ''
            ? [
                {
                  letter: 'Frequently Selected',
                  data: frequentlySelectedNationalities,
                },
                ...Object.keys(nationalitiesBySection).map(letter => ({
                  letter,
                  data: nationalitiesBySection[letter],
                })),
              ]
            : [
                {
                  letter: `Results for "${searchQuery}"`,
                  data: filteredNationalities,
                },
              ]
        }
        renderItem={({item, index}) => (
          <View
            style={{
              border: '1px solid green',
            }}>
            {renderNationality({item, index})}
          </View>
        )}
        renderSectionHeader={({section}) => renderSectionHeader({section})}
        keyExtractor={(_, index) => `${index}`}
      />

      <PinkButton buttonText="Next" onPress={handleSwitchButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },

  paddingTop: {
    paddingTop: 16,
  },
  paddingLeft: {
    marginLeft: 16,
    marginRight: 16,
  },
  searchBar: {
    // backgroundColor: 'white',
    flexDirection: 'row', // Arrange input and icon side by side
    alignItems: 'center', // Align items vertically
    backgroundColor: Colours.black05,
    borderRadius: 8,
    padding: 4,
    margin: 16,
  },
  searchIcon: {
    // Style for the SearchIcon component
    marginRight: 8, // Space between icon and input
  },
  input: {
    flex: 1, // Take up remaining space in the search bar
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    alignSelf: 'center', // Center the separator horizontally
    marginLeft: 16, // Add marginLeft
    marginRight: 16, // Add marginRight
  },
  sectionHeader: {
    paddingVertical: 15, // Add padding to increase the height
    marginLeft: 16, // Add marginLeft
  },
  searchContainer: {
    // Container for search input and icon
    backgroundColor: 'white',
    flexDirection: 'row', // Arrange input and icon side by side
    alignItems: 'center', // Align items vertically
    padding: 8,
    margin: 16,
  },
});

export default UpgradeNationalityScreen;
