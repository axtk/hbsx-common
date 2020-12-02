module.exports = x => {
    if (typeof x !== 'number')
        return '';

    // @see https://rosettacode.org/wiki/Roman_numerals/Encode#Declarative
    return 'I'
        .repeat(x)
        .replace(/IIIII/g, 'V')
        .replace(/VV/g, 'X')
        .replace(/XXXXX/g, 'L')
        .replace(/LL/g, 'C')
        .replace(/CCCCC/g, 'D')
        .replace(/DD/g, 'M')
        .replace(/VIIII/g, 'IX')
        .replace(/LXXXX/g, 'XC')
        .replace(/XXXX/g, 'XL')
        .replace(/DCCCC/g, 'CM')
        .replace(/CCCC/g, 'CD')
        .replace(/IIII/g, 'IV');
};